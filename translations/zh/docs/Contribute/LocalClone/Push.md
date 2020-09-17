# 推送（push）

## 需求

您需要知道如何 [创建提交](/Contribute/LocalClone/CreateCommit/) 并且您需要至少创建其中一个。

## 我们将做什么

我们将使用我们创建的承诺(例如 [创建提交](/Contribute/LocalClone/CreateCommit/)中的示例)，并将更改推送到GitHub

## 检查当前状态

如果你运行了 `git 状态` ，你可以看到有多少次提交你的本地克隆在前面/在你的叉后面。

在这种情况下，我们将提前1次提交：  
![git 状态调用](/Contribute/LocalClone/assets/Example1_Bash_GitStatus3.png)

## Git 推送

现在我们运行 `git 推送` 来将我们的更改推送到远程分支。  
您可能需要您的 GH 用户名和密码。  
**小心：** 当您使用双因素授权 (2FA) 时，您需要创建和使用 *个人访问令牌* 而不是您的 GH 密码！

![凭据对话框](/Contribute/LocalClone/assets/Example1_Bash_GitPush_Credentials.png)

要验证提交是否真正处于叉中，您可以检查现在应该有承诺的提交列表： ![提交列表](/Contribute/LocalClone/assets/Example1_CommitList.png)

## 下一步该做什么

既然你已经将你的更改推到了叉中，你可以使用 GH 来 [创建一个拉取请求](/Contribute/PullRequest/)。  
这与您使用在线编辑器编辑文件的程序相同。