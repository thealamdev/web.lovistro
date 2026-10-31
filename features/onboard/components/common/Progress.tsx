
'use client';

import { motion } from 'framer-motion';

type ProgressProps = {
    percentage: number;
};

export default function Progress({ percentage }: ProgressProps) {
    const progress = Math.min(100, Math.max(0, percentage));

    return (
        <div className="h-3 w-full overflow-hidden rounded-full bg-[#414141]">
            <motion.div
                className="h-full rounded-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{
                    duration: 0.6,
                    ease: 'easeInOut',
                }}
            />
        </div>
    );
}