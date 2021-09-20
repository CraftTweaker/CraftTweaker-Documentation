# 安装Git

In order for you to [clone your forked repository](/Contribute/LocalClone/Clone/) you will need to install git.  
Git is a distributed version control system (basically, it's what GitHub, BitBucket and other version control services use).

## 获取Git

You can check if you have git installed by opening the Command Prompt and executing the command `git`.  
If you get the usage page, then you have it installed and can skip this page.  
If you do not get the usage page then you either have it not installed or you have not added it to your PATH (see below). 在这样的情况下，您需要安装git或将其添加到您的路径：  
![CMD在未安装git的情况下返回git命令 ](/Contribute/LocalClone/assets/CMD_noGit.png)

### 下载并安装Git

If you do not have git installed, then you can download the installer from [their official page](https://git-scm.com/downloads/).  
Choose your Operation System, download the installer, run it and follow the instructions.  
If you are not sure on which options to check, leave them as default.  
If you cannot proceed after setting your preferred text editor, go back one page and then go forward to the page again, in some cases this will make the `next` button appear.

### 添加Git到您的 PATH

安装Git后，它应该被添加到您的 PATH。 If not, first try to close and open your command prompt.  
If it still tells you it doesn't know git, restart your computer.  
If it still tells you it doesn't know git, you may need to add it to your path.

I won't cover how to add it in detail, all you need to do is add the directory where you installed git to as path.  
If you for example installed Git to `C:\Program Files\Git` you will need to add `C:\Program Files\Git\cmd` to your path.  
Afterwards restart your command prompt or your computer.

其实这并不是必需的，但这可以大大提升您的工作效率。

## 下一步该做什么

现在你已经安装好了Git，可以[clone你fork的项目](/Contribute/LocalClone/Clone/)了。