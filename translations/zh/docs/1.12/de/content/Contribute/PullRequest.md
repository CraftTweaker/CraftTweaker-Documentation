# 提交 Pull Request

## 需求

你已经在你复制的仓库中 [创建](/Contribute/OnlineEditor_Create) 或[修改](/Contribute/OnlineEditor_Edit) 了 wiki 的文件。

## Einführung

After you have created or modified whatever you were trying to do, you need to get the changes to the original repository.  
This guide will show you how to create a PR to apply your changes to the actual wiki.

A Pull Request (or PR for short) allows you to apply your commits to the original codebase.  
In other words, it allows you to make your changes visible to everyone visiting the wiki.

## 提交 Pull Request

When you head back to your fork's GitHub page, you will notice the branch info bar.  
This bar tells you how your fork version differs from the original one.

例如下图中的这个分支，它有 3 个更改没有应用于源仓库，而源仓库有3个更改没有应用于此分支。

![Pull Request 按钮](/Contribute/assets/PullRequest_Compare_PullRequestButton.png)

If you click on the "Pull Request" button a new view will open, the Compare View.  
In most cases it is already properly defined to use the Original CraftTweaker/CraftTweaker-Documentation master branch as destination and your branch as the changes to be pulled.

Github will also verify that there are no conflicts between your changes and what the current state of the wiki is.  
In case it does find any misfits it will alert you, though you can still create the PR and ask for our help to resolve the conflicts.

现在，你只提需要供一个描述性标题和描述，告诉我们有关更改的信息。

Also notice the `Allow edits from mainainers` checkbox.  
This checkbox allows people with write-access to the CrT-Repo (e.g. Members of the CraftTweaker organization) to modify files of your PR in order to resolve merge conflicts, for example.

![新 PR 工具](/Contribute/assets/PullRequest_Create.png)

在底部，你可以可以确认所有的更改是否都将包含在 PR 中。

## 下一步

Next, someone from the CrT-Organization or any contributor can look over your PR and leave general feedback or suggestions.  
If someone from the CrT-Organization does a PR Review, you will be notified of all comments and whether or not you need to change something before it will be merged.  
After all suggestions have been resolved, someone will merge the PR.