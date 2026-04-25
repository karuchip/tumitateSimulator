import ReportProblemIcon from '@mui/icons-material/ReportProblem';

const Menseki = () => {
  return(
    <div className='mensekiContent co-kakomiBlack'>
      <h3>免責事項</h3>
      <ReportProblemIcon sx={{fontSize:"32px", color:"#606060", margin:"10px 0"}}/>
      <ul>
        <li>
          本サイトは個人により作成されたシミュレーションツールです。内容については正確性の確保に努めていますが、最終的な判断はご自身の責任にてお願いいたします。
        </li>
        <li>
          本サイトは投資の勧誘を目的としたものではありません。
        </li>
        <li>
          本シミュレーションは一般的な前提条件に基づく参考値であり、特定の金融商品や投資手法を推奨するものではありません。ご利用により生じたいかなる損失についても責任を負いかねます。
        </li>
        <li>
          税金、手数料、インフレなどは考慮しておりませんのでご注意ください。
        </li>
        <li>
          入力された情報は外部サーバーに送信・保存されることはなく、すべての計算はブラウザ内で完結します。個人情報の収集は一切行いません。
        </li>
      </ul>
    </div>
  )
}
export default Menseki
