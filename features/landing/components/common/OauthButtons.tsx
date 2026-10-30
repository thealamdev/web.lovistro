import { Button } from '@/components/ui/button'
import AppleIcon from '@/components/icons/AppleIcon'
import GoogleIcon from '@/components/icons/GoogleIcon'
import { socialButtonClass } from '../../constants/welcome.constants'

export default function OauthButtons() {
    const googleOauth = () => { alert('Google Oauth') }
    const appleOauth = () => { alert('AppleOauth') }

    return (
        <div className="space-y-3">
            <Button
                type="button"
                onClick={() => googleOauth()}
                className={socialButtonClass}
            >
                <GoogleIcon className="size-5" />
                Sign in with Google
            </Button>

            <Button
                type="button"
                onClick={() => appleOauth()}
                className={socialButtonClass}
            >
                <AppleIcon className="size-5" />
                Sign in with Apple
            </Button>
        </div>
    )
}
