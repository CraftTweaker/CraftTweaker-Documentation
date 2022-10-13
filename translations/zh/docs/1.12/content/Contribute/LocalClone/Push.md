# 推送（Push）

## 前提

需要知道如何[创建提交](/Contribute/LocalClone/CreateCommit/)，并且已创建有提交。

## 我们将做什么

我们将使用创建的提交（如[创建提交](/Contribute/LocalClone/CreateCommit/)中的示例），并将更改推送至 GitHub。

## 检查当前状态

若运行 `git status`，可得到你分支前后有多少对你本地拷贝的提交。

这里我们的 1 个提交超前了：  
![git status 调用](/Contribute/LocalClone/assets/Example1_Bash_GitStatus3.png)


## Git 推送

运行 `git push` 来将我们的更改推送至远程分支。  
可能需要你的 GitHub 用户名与密码。  
**注意：**当你使用了两步验证（2FA），你需要创建并使用*个人访问令牌*以取代 GitHub 密码！

![凭据会话](/Contribute/LocalClone/assets/Example1_Bash_GitPush_Credentials.png)


为验证提交确实处于分支中，你可以检查提交列表，里面应该会有提交：![有提交的提交列表](/Contribute/LocalClone/assets/Example1_CommitList.png)


## 下一步该做什么

现在，你所做的更改已经推送至分支中，你可以用 GitHub 来[创建拉取请求](/Contribute/PullRequest/)。  
这和你用在线编辑器编辑文件的流程是一样的。