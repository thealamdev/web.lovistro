'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

type ConfettiCanvasProps = {
    className?: string
    /** rectangles per 390px of width (scales with screen width) */
    density?: number
    /** share of particles that are curly streamers (0 to 1) */
    ribbonRatio?: number
    colors?: string[]
    /** where particles start fading, as a fraction of height */
    fadeFrom?: number
    /** where they are fully invisible, as a fraction of height */
    fadeTo?: number
}

type Particle = {
    kind: 'rect' | 'ribbon'
    x: number
    y: number
    vy: number
    size: number
    rotation: number
    spin: number
    flip: number
    flipSpeed: number
    phase: number
    phaseSpeed: number
    swayAmp: number
    color: string
    length: number
    coils: number
}

const GOLD = ['#F5C45E', '#E8A93B', '#C9922B', '#FFD98A', '#B07A1F']

const rand = (min: number, max: number) => Math.random() * (max - min) + min
const clamp = (n: number, min = 0, max = 1) => Math.min(max, Math.max(min, n))

function createParticle(
    width: number,
    height: number,
    colors: string[],
    ribbonRatio: number,
    startY: [number, number],
): Particle {
    const isRibbon = Math.random() < ribbonRatio
    return {
        kind: isRibbon ? 'ribbon' : 'rect',
        x: rand(0, width),
        y: rand(startY[0], startY[1]),
        vy: isRibbon ? rand(18, 38) : rand(28, 65),
        size: isRibbon ? rand(1.5, 2.5) : rand(5, 10),
        rotation: rand(0, Math.PI * 2),
        spin: rand(-1.5, 1.5),
        flip: rand(0, Math.PI * 2),
        flipSpeed: rand(2, 6),
        phase: rand(0, Math.PI * 2),
        phaseSpeed: rand(0.8, 2),
        swayAmp: rand(8, 22),
        color: colors[Math.floor(Math.random() * colors.length)],
        length: rand(40, 80),
        coils: rand(1.5, 3),
    }
}

export default function ConfettiCanvas({
    className,
    density = 155,
    ribbonRatio = 0.1,
    colors = GOLD,
    fadeFrom = 0.1,
    fadeTo = 0.6,
}: ConfettiCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const parent = canvas?.parentElement
        const ctx = canvas?.getContext('2d')
        if (!canvas || !parent || !ctx) return

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        let width = 0
        let height = 0
        let particles: Particle[] = []
        let raf = 0
        let last = performance.now()

        const populate = () => {
            const count = Math.round((width / 390) * density)
            particles = Array.from({ length: count }, () =>
                createParticle(width, height, colors, ribbonRatio, [-20, height * fadeTo]),
            )
        }

        const resize = () => {
            const rect = parent.getBoundingClientRect()
            const dpr = window.devicePixelRatio || 1
            width = rect.width
            height = rect.height
            canvas.width = width * dpr
            canvas.height = height * dpr
            canvas.style.width = `${width}px`
            canvas.style.height = `${height}px`
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
            populate()
            draw()
        }

        const fadeAlpha = (y: number) =>
            1 - clamp((y - height * fadeFrom) / (height * (fadeTo - fadeFrom)))

        const drawRect = (p: Particle, alpha: number) => {
            ctx.save()
            ctx.translate(p.x, p.y)
            ctx.rotate(p.rotation)
            ctx.scale(1, Math.cos(p.flip)) // fake 3D flip
            ctx.globalAlpha = alpha
            ctx.fillStyle = p.color
            ctx.fillRect(-p.size * 0.3, -p.size * 0.5, p.size * 0.6, p.size)
            ctx.restore()
        }

        const drawRibbon = (p: Particle, alpha: number) => {
            const segments = 22
            const amp = 7
            ctx.save()
            ctx.translate(p.x, p.y)
            ctx.rotate(Math.sin(p.phase) * 0.6)
            ctx.lineWidth = p.size
            ctx.lineCap = 'round'
            ctx.strokeStyle = p.color

            let prevX = Math.sin(p.phase * 2) * amp
            let prevY = 0
            for (let i = 1; i <= segments; i++) {
                const t = i / segments
                const x = Math.sin(t * p.coils * Math.PI * 2 + p.phase * 2) * amp
                const y = t * p.length
                ctx.globalAlpha = alpha * (1 - t * 0.85) // tail fades out
                ctx.beginPath()
                ctx.moveTo(prevX, prevY)
                ctx.lineTo(x, y)
                ctx.stroke()
                prevX = x
                prevY = y
            }
            ctx.restore()
        }

        const draw = () => {
            ctx.clearRect(0, 0, width, height)
            for (const p of particles) {
                const alpha = fadeAlpha(p.y)
                if (alpha <= 0) continue
                if (p.kind === 'rect') drawRect(p, alpha)
                else drawRibbon(p, alpha)
            }
        }

        const tick = (now: number) => {
            const dt = Math.min((now - last) / 1000, 0.05)
            last = now

            particles = particles.map((p) => {
                p.y += p.vy * dt
                p.phase += p.phaseSpeed * dt
                p.x += Math.cos(p.phase) * p.swayAmp * dt
                p.rotation += p.spin * dt
                p.flip += p.flipSpeed * dt

                // fully faded -> respawn above the screen
                if (fadeAlpha(p.y) <= 0) {
                    return createParticle(width, height, colors, ribbonRatio, [-80, -10])
                }
                return p
            })

            draw()
            raf = requestAnimationFrame(tick)
        }

        const observer = new ResizeObserver(resize)
        observer.observe(parent)
        resize()

        // reduced motion: keep the static scatter, skip the animation
        if (!reduceMotion) raf = requestAnimationFrame(tick)

        return () => {
            cancelAnimationFrame(raf)
            observer.disconnect()
        }
    }, [density, ribbonRatio, colors, fadeFrom, fadeTo])

    return (
        <canvas
            ref={canvasRef}
            aria-hidden
            className={cn('pointer-events-none', className)}
        />
    )
}