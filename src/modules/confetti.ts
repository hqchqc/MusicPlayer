import JSConfetti from 'js-confetti'
import { type UserModule } from '~/types'

export const install: UserModule = () => {
  if (typeof window === 'undefined')
    return

  const jsConfetti = new JSConfetti()
  jsConfetti.addConfetti()
}
