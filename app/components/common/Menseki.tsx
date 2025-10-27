import ReportProblemIcon from '@mui/icons-material/ReportProblem';

const Menseki = () => {
  return(
    <div className='mensekiContent co-kakomiBlack'>
      <h3>免責事項</h3>
      <ReportProblemIcon sx={{fontSize:"32px", color:"#606060", margin:"10px 0"}}/>
      <ul>
        <li>
          本シミュレーションはあくまで趣味の範囲で作成したもので、将来の資産形成を保証するものではありません。
        </li>
        <li>
          試算結果は参考値であり、実際の投資成果とは異なる場合があります。ご利用により生じたいかなる損失についても責任を負いかねます。
        </li>
        <li>
          税金、手数料、インフレなどは考慮しておりませんのでご注意ください。
        </li>
        <li>
          本サイトは投資の勧誘を目的としたものではありません。
        </li>
        <li>
          入力された情報は外部サーバーに送信・保存されることはなく、すべての計算はブラウザ内で完結します。個人情報の収集は一切行いません。
        </li>
      </ul>
    </div>
  )
}
export default Menseki
