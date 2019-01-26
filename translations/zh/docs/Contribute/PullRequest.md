# 提交 Pull Request

## 需求

你已经在你复制的仓库中 [创建](/Contribute/OnlineEditor_Create) 或[修改](/Contribute/OnlineEditor_Edit) 了 wiki 的文件。

## 介绍

创建或修改完了所有内容后,，你需要将修改后的内容提交到原仓库。  
本指南将向你展示如何创建 PR 以将你的更改应用于实际的 wiki。

Pull Request（简称 PR）允许你将更改应用与原始的代码库中。  
换句话说，它允许任何浏览此 wiki 的人看到你的更改。

## 提交 Pull Request

当你完成更改并返回复制的仓库页面时，你会看到你的分支信息栏。  
此栏将告诉你你复制的仓库与原仓库的区别。

For example, the picture below has three commits that have not yet been applied to the CrT-wiki whereas three other commits have been created in the original one that have not been applied to the fork.

![Pull Request Button](/Contribute/assets/PullRequest_Compare_PullRequestButton.png)

If you click on the "Pull Request" button a new view will open, the Compare View.  
In most cases it is already properly defined to use the Original Crafttweaker/Crafttweaker-Documentation master branch as destination and your branch as the changes to be pulled.

Github will also verify that there are no conflicts between your changes and what the current state of the wiki is.  
In case it does find any misfits it will alert you, though you can still create the PR and ask for our help to resolve the conflicts.

Now all you need is provide a descriptive title and a description that will tell us about the changes.

Also notice the `Allow edits from mainainers` checkbox.  
This checkbox allows people with write-access to the CrT-Repo (e.g. Members of the CraftTweaker organization) to modify files of your PR in order to resolve merge conflicts, for example.

![New PR Tool](/Contribute/assets/PullRequest_Create.png)

At the bottom you can verify that all your changes will be included in the PR.

## Next Steps

Next, someone from the CrT-Organization or any contributor can look over your PR and leave general feedback or suggestions.  
If someone from the CrT-Organization does a PR Review, you will be notified of all comments and whether or not you need to change something before it will be merged.  
After all suggestions have been resolved, someone will merge the PR.