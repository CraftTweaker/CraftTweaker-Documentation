# 複製

## Summary

このページでは、フォークしたリポジトリをローカルコンピュータにクローンする方法を説明します。

## 前提条件

You should have [Forked the CrT-wiki repository](/Contribute/SetupGithub/) and you need to have [Git installed](/Contribute/LocalClone/InstallingGit/).

## 最初のステップ

First you need to create a folder on your local computer where you want the wiki to be cloned to.  
Then you need to open either your command prompt or git bash in that folder.  
I'm going to use git Bash but the same procedure should work for the CMD as well.

git bashを開くには、フォルダに移動し、マウスの右キーでクリックします。  
![gitBash オプションが選択されたエクスプローラーのコンテキスト メニュー](/Contribute/LocalClone/assets/ExplorerContextMenu_GitBash.png)

## フォークをクローン中

フォルダにgit Bashを開いたら、リポジトリのURLを取得する必要があります。  
GitHubでフォークを確認する際にこのURLを見つけることができます：

![リポジトリのURLを特定する](/Contribute/LocalClone/assets/GitHub_CloneLink.png)

そのURLを使用する必要があります。 SSHの設定方法がわかっている場合は、おそらくこのガイドは必要ありません。  
ボタンをクリックして文字列をクリップボードにコピーすることもできます。

`git clone <repo-Url>` を実行する必要があります。

![コマンドを複製](/Contribute/LocalClone/assets/GitBash_CloneCommand.png) ![コマンドの複製に成功](/Contribute/LocalClone/assets/GitBash_CloneCommandSuccess.png)

Now you should have a new folder named `CraftTweaker-Documentation` in your directory.  
Let's navigate to it and issue a `git status`:

![ディレクトリの変更とgitの状態の発行](/Contribute/LocalClone/assets/GitBash_Clone_GitStatus.png)

## 続行方法

これでwikiのローカルクローンができたので、ファイルの作成と編集を開始し、 [コミット](/Contribute/LocalClone/CreateCommit/) を作成できます。