# Push

## 前提条件

[コミット](/Contribute/LocalClone/CreateCommit/) を作成する方法を知っておく必要があります。少なくとも 1 つ作成する必要があります。

## 私たちは何をします

私たちは作成したコミット(例えば [コミットの作成](/Contribute/LocalClone/CreateCommit/))を使用し、変更をGitHubにプッシュします。

## 現在の状態を確認する

`git status` を実行すると、ローカルクローンが前方またはフォークの背後にあるコミット数を確認できます。

この場合、我々は1コミットによって先行しています:  
![git status call](/Contribute/LocalClone/assets/Example1_Bash_GitStatus3.png)

## Git push

Now we run `git push` to push our changes to the remote branch.  
You might be asked for your GH username and password.  
**Careful:** When you use TwoFactor Authorization (2FA) you need to create and use a *Personal Access Token* instead of your GH password!

![資格情報ダイアログ](/Contribute/LocalClone/assets/Example1_Bash_GitPush_Credentials.png)

To verify that the commit is actually on the fork, you can check the commit list that should now have the commit in there: ![コミットでコミットリスト](/Contribute/LocalClone/assets/Example1_CommitList.png)

## 続行方法

Now that you have pushed your changes to your fork, you can use GH to [create a Pull request](/Contribute/PullRequest/).  
This is the same procedure as if you were using the online editor to edit files.