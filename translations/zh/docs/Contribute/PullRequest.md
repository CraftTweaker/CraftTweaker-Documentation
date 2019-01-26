# 提交 Pull Request

## 需求

你已经在你复制的仓库中 [创建](/Contribute/OnlineEditor_Create) 或[修改](/Contribute/OnlineEditor_Edit) 了 wiki 的文件。

## 介绍

创建或修改完了所有内容后,，你需要将修改后的内容提交到源仓库。  
本指南将向你展示如何创建 PR 以将你的更改应用于实际的 wiki。

Pull Request（简称 PR）允许你将更改应用与原始的代码库中。  
换句话说，它允许任何浏览此 wiki 的人看到你的更改。

## 提交 Pull Request

当你完成更改并返回复制的仓库页面时，你会看到你的分支信息栏。  
此栏将告诉你你复制的仓库与源仓库的区别。

例如下图中的这个仓库，它有 3 个更改没有应用于源仓库，而源仓库有3个更改没有应用于主仓库。

![Pull Request Button](/Contribute/assets/PullRequest_Compare_PullRequestButton.png)

点击“Pull Request” 按钮后会打开一个新的页面，对比页面。  
大多数情况下，你所做更改的提交位置会自动设置为原来的 Crafttweaker/Crafttweaker-Documentation 仓库的主分支上。

Github 还将验证你的更改与当前的 wiki 之间没有冲突。  
如果它确实发现任何冲突就会提醒你，尽管如此，你仍然可以创建 PR，并请求我们帮助你解决冲突。

现在，你只提需要供一个描述性标题和描述，告诉我们有关更改的信息。

与此同时，请注意 `Allow edits from maintainers` 勾选框。  
点击这个勾选框将允许有编写 CrT 仓库的人（例如 CraftTweaker 组织的成员）修改你的内容以达到例如解决冲突的目的。

![New PR Tool](/Contribute/assets/PullRequest_Create.png)

在底部，你可以可以确认所有的更改是否都将包含在 PR 中。

## 下一步

Next, someone from the CrT-Organization or any contributor can look over your PR and leave general feedback or suggestions.  
If someone from the CrT-Organization does a PR Review, you will be notified of all comments and whether or not you need to change something before it will be merged.  
After all suggestions have been resolved, someone will merge the PR.