# プルリクエストの送信

## 前提条件

Wikiのフォークで [を作成したり、](/Contribute/OnlineEditor_Create) ファイルや [ファイルを](/Contribute/OnlineEditor_Edit) 変更したりする必要があります。

## 導入

何をしようとしているものを作成または変更した後、元のリポジトリに変更を取得する必要があります。  
このガイドでは、実際のWikiに変更を適用するためのPRを作成する方法を説明します。

プルリクエスト(または略してPR)を使用すると、オリジナルのコードベースにコミットを適用できます。  
言い換えれば、そのWikiを訪れる全員に変更を見えるようにすることができます。

## プルリクエストを開く

フォークのGitHubページに戻ると、ブランチ情報バーが表示されます。  
このバーでは、フォークのバージョンが元のバージョンと異なる方法を説明します。

例えば、 下の写真はまだCrT-wikiに適用されていない3つのコミットですが、他の3つのコミットはフォークに適用されていないオリジナルのコミットに作成されています。

![プルリクエストボタン](/Contribute/assets/PullRequest_Compare_PullRequestButton.png)

「Pull Request」ボタンをクリックすると、新しいビューが開き、比較ビューが表示されます。  
ほとんどの場合、元の CraftTweaker/CraftTweaker-Documentation master ブランチを宛先として、プルする変更としてブランチを使用するようにすでに適切に定義されています。

Githubはまた、変更内容とwikiの現在の状態との間に矛盾がないことを確認します。  
不適合が見つかった場合、警告されます。 あなたはまだPRを作成し、紛争を解決するために我々の助けを求めることができますが。

今必要なのは、説明的なタイトルと変更について教えてくれる説明だけです。

`メインナーからの編集を許可する` チェックボックスにも注意してください。  
このチェックボックスは、CrT-Repo への書き込みアクセスを持つ人々を許可します。 をクリックします。 CraftTweaker組織のメンバーなど) マージの競合を解決するために、PRファイルを変更します。

![New PR Tool](/Contribute/assets/PullRequest_Create.png)

下部には、すべての変更がPRに含まれることを確認できます。

## 次のステップ

Next, someone from the CrT-Organization or any contributor can look over your PR and leave general feedback or suggestions.  
If someone from the CrT-Organization does a PR Review, you will be notified of all comments and whether or not you need to change something before it will be merged.  
After all suggestions have been resolved, someone will merge the PR.