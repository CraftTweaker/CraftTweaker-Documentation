# 克隆

## 概要

此页面显示了如何将你的分支仓库克隆到你的本地计算机。

## 需求

你应该有[分支CrT-wiki仓库](/Contribute/SetupGithub/)并且你需要[安装Git](/Contribute/LocalClone/InstallingGit/)。

## 第一步

First you need to create a folder on your local computer where you want the wiki to be cloned to.  
Then you need to open either your command prompt or git bash in that folder.  
I'm going to use git Bash but the same procedure should work for the CMD as well.

要打开 Git 子程序，只需浏览该文件夹，然后用鼠标右键单击：  
![选择 githBash 选项后浏览上下文菜单](/Contribute/LocalClone/assets/ExplorerContextMenu_GitBash.png)

## 克隆你的分支

After you have opened git Bash in the folder, you need to get the repo url.  
You can find this url when checking your fork on GitHub:

![定位代码仓库的网址](/Contribute/LocalClone/assets/GitHub_CloneLink.png)

你需要使用该URL。 We will be using HTTPS for the cloning, if you know how to set up SSH you probably don't need this guide.  
You can also click on the button to copy the string to your clipboard.

现在需要运行命令`git clone<repo-Url>`

![克隆命令](/Contribute/LocalClone/assets/GitBash_CloneCommand.png) ![克隆命令成功](/Contribute/LocalClone/assets/GitBash_CloneCommandSuccess.png)

Now you should have a new folder named `CraftTweaker-Documentation` in your directory.  
Let's navigate to it and issue a `git status`:

![更改目录和发布 git 状态](/Contribute/LocalClone/assets/GitBash_Clone_GitStatus.png)

## 下一步该做什么

现在你有一个本地的Wiki克隆，你可以开始创建和编辑文件，并最终 [创建一个提交](/Contribute/LocalClone/CreateCommit/)。