import { FadeIn } from "../components/animation/fadeIn"
import Menseki from "../components/common/Menseki"


const MensekiPage = () => {
  return (
    <section className="mensekiContainer mensekiPage">
      <div className="co-screenPosition">
        {/* 免責事項 */}
        <FadeIn>
          <Menseki/>
        </FadeIn>
      </div>
    </section>
  )
}

export default MensekiPage
