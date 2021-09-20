# 推送（Push）

## 需求

您需要知道如何 [创建commit(提交)](/Contribute/LocalClone/CreateCommit/) 并且至少创建一个commit。

## 我们将做什么

我们使用创建的commit(例如在[创建commit](/Contribute/LocalClone/CreateCommit/)中的做法)并且将变化push到github上。

## 检查当前状态

If you run `git status` you can see how many commits your local clone is ahead/behind your fork.

In this case we are ahead by 1 commit:  
![git status call](/Contribute/LocalClone/assets/Example1_Bash_GitStatus3.png)

## Git 推送

Now we run `git push` to push our changes to the remote branch.  
You might be asked for your GH username and password.  
**Careful:** When you use TwoFactor Authorization (2FA) you need to create and use a *Personal Access Token* instead of your GH password!

![Credentials dialog](/Contribute/LocalClone/assets/Example1_Bash_GitPush_Credentials.png)

To verify that the commit is actually on the fork, you can check the commit list that should now have the commit in there: ![Commit List with commit](/Contribute/LocalClone/assets/Example1_CommitList.png)

## 下一步该做什么

Now that you have pushed your changes to your fork, you can use GH to [create a Pull request](/Contribute/PullRequest/).  
This is the same procedure as if you were using the online editor to edit files.