# Push

## 需求

You need to know how to [create Commits](/Contribute/LocalClone/CreateCommit/) and you need to have created at least one of them.

## What will we do

We will use the commit(s) we have created (e.g. the example in [create Commits](/Contribute/LocalClone/CreateCommit/)) and push the changes to GitHub.

## Check the current status

If you run `git status` you can see how many commits your local clone is ahead/behind your fork.

In this case we are ahead by 1 commit:  
![git status call](/Contribute/LocalClone/assets/Example1_Bash_GitStatus3.png)

## Git push

Now we run `git push` to push our changes to the remote branch.  
You might be asked for your GH username and password.  
**Careful:** When you use TwoFactor Authorization (2FA) you need to create and use a *Personal Access Token* instead of your GH password!

![Credentials dialog](/Contribute/LocalClone/assets/Example1_Bash_GitPush_Credentials.png)

To verify that the commit is actually on the fork, you can check the commit list that should now have the commit in there: ![Commit List with commit](/Contribute/LocalClone/assets/Example1_CommitList.png)

## How to continue

Now that you have pushed your changes to your fork, you can use GH to [create a Pull request](/Contribute/PullRequest/).  
This is the same procedure as if you were using the online editor to edit files.