# Addon-AlertLinkExe
アドオン及びjavascriptの練習のため、作成したものです。  
  
FireFoxで使用することを目的に作成されたアドオンです。  
(Chromeでも動くと思います。)  
aタグのhrefに.exeを含むリンクを真っ赤にします。  
概ねのサイトは自動で着色されますが、GitHubのリポジトリ内のページ遷移のように、ページ遷移にページをロードするイベントが発生しない場合は自動で着色されません。  
手動でも`Shiftキー`を押しながら、どこかをクリックすることで着色することができます。  

**一応ですが、使用は自己責任でお願いします。**  

## 今後の方針（ほぼやらないけど…。）
タブの切り替えや、GitHubのページ遷移のようにaddEventListener("load")などで検知できないページの着色を考えています。  
現段階では、URLの変化を検知する、という手法を考えていますが、まだ実装手法を理解できていないため、置いておきます。  

普段使いをすることを想定していないので、パッケージ化等はしません。  
あくまで勉強用です。
