import ReportProblemIcon from '@mui/icons-material/ReportProblem';

const Menseki = () => {
  return(
    <div className='mensekiContent co-kakomiBlack'>
      <h3>免責事項</h3>
      <ReportProblemIcon sx={{fontSize:"32px", color:"#606060", margin:"10px 0"}}/>
      <ul>
        <li>
          本シミュレーションはあくまで試算であり、
          将来の資産形成を保証するものではありません。
          実際の投資結果とは異なる場合があり、
          利用により生じたいかなる損失についても
          責任を負いかねますのでご了承ください。
        </li>
        <li>
          税金、手数料、インフレなどは考慮しておりませんので
          ご注意願います。
        </li>
        <li>
          投資を勧誘するためのものではございません。
        </li>
        <li>
          入力された情報を外部サーバーへ送信・保存することはありません。すべての計算はブラウザ内で完結し、個人情報は一切収集いたしません。
        </li>
      </ul>
    </div>
  )
}
export default Menseki
