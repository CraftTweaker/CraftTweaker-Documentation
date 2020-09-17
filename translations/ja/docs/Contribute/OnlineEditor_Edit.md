# GitHub のオンライン エディタを使用してファイルを編集

## 要件

GitHubアカウントを作成し、 [アカウントにWikiをフォーク](/Contribute/SetupGithub)する必要があります。

## 導入

GitHubのオンラインエディタでは、ブラウザ以外を使用してファイルを変更して作成することができます。  
ローカルコピーを使用する [ほど汎用性はないかもしれません](/Contribute/LocalClone/CreateCommit/) が、 [git](/Contribute/LocalClone/InstallingGit/) の設定を心配する必要はありません。

This guide will show you how to edit an already existing file using github's online editor.  
You may want to edit the page because you have found a typo or want to include a better example, whatever the reason, feel free to commit changes and eventually [file a Pull Request](/Contribute/PullRequest).

ただし、英語版のみ編集できることを覚えておいてください。翻訳は [Crowdin](https://crowdin.com/project/crafttweaker-documentation/) で処理されます。

## ファイルを見つけます

既存のファイルを編集する場合は、まずファイルを見つける必要があります。

ほとんどの場合、Wiki URLをチェックすることでファイルを見つけることができます。

親指のルール: `#` は docs フォルダで、その後はすべてネストされたフォルダであり、最終的にはファイルです。

例えば、ファイルの作成  
[https://docs.blamejared.com/ja/#AdvancedFunctions/Arrays_and_Loops/](https://docs.blamejared.com/en/#AdvancedFunctions/Arrays_and_Loops/)  
は  
`docs/AdvancedFunctions/Arrays_and_Loops.md にあります。`

## ファイルを編集

ファイルが正常に見つかったら、それをクリックしてGitHubファイルビューで開きます。  
wikiのエントリがどのように見えるかをご覧ください。 これがエントリーコンテンツだけなのでナビゲーションバーは存在しませんが

Click on the little pen icon to open the editor: ![編集ボタン](/Contribute/assets/OnlineEditor_EditButton.png)

エディタを使用すると、ファイルを好きなように変更したり、コンパイルされた書式設定でプレビューを直接表示したりできます。 このプレビューには、左側に色付きのバーが表示されます。

- グリーン:このセクションは以前はこのページにはありませんでした。
- Yellow: このセクションは前にこのページに存在していましたが、変更されました。例えば、タイプミスが修正されたり、追加情報が提供されたりしました。
- 赤: このセクションは以前にこのページに存在していましたが、削除されました。
- なし：このセクションは触れられていない。

ファイルの構文が新しくなった場合、wikiはMarkDownを使用します。 googleを使って見つけるべきチュートリアルはたくさんあるはずです(もしくは、こちらに追加することもできます)。

## 変更を保存/コミット

ファイルを変更したら、変更を保存したいことを GitHub に知らせる必要があります。

エディタの下のコミットボックスは次のようなものです:  
ファイルを保存することはできません。 あなたが何をしたか(コミットタイトル)の概要と、必要に応じて簡単な説明を提供する必要があります。ここでは、変更の理由や変更内容などの追加情報を入力できます。

デフォルトでは以下のようになります。  
![デフォルトのコミット](/Contribute/assets/OnlineEditor_CommitBox_Default.png)

この例では、コミット タイトル (または要約を編集) は `Update Array_and_Loops.md` です。 GitHub は実際の変更が何をすべきかを知ることができないため、これと同じようにジェネリックなものを試行します。

追加のタイトルや説明を追加したいと思うかもしれませんが、後でプルリクエストを簡単に確認できますが、必須ではありません。

GitHub アカウントに複数のメールアドレスを登録している場合は、コミットを作成するメールアドレスを選択できます。 しかし、これは貢献するための実質的な影響を与えることはありません。  
マスターブランチに直接コミットするか、またはコミット用に新しいブランチを作成するかを決定することもできます。 ほとんどの場合、マスターブランチにコミットすることはうまく機能します。

A filled out example might look like this: ![コミットボックス塗りつぶし](/Contribute/assets/OnlineEditor_CommitBox_Filled.png)

## 次の操作方法

After you have committed your changes, you can go on and edit or [Create](/Contribute/OnlineEditor_Create) more files using the online editor.  
After you have done all your changes, you can [file a Pull Request](/Contribute/PullRequest).