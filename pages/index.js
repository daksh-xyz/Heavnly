import HomePage from './homepage'
import Login from "../components/Login"

export default function Home() {
  return (
    <div>
      <audio
        id='audio-element'
        hidden
        playsInline
        onVolumeChange={e => updateVolume(e)}
        onTimeUpdate={e => updateProgress(e)}
      />
      <HomePage />
      {}
    </div>
  )
}
