# Filing a PullRequest

## Prerequisites
You need to have [created](/Contribute/OnlineEditor_Create) and/or [modified](/Contribute/OnlineEditor_Edit) files in your fork of the wiki.

## Introduction
After you have created or modified whatever you were trying to do, you need to get the changes to the original repository.  
This guide will show you how to create a PR to apply your changes to the actual wiki.  

A Pull Request (or PR for short) allows you to apply your commits to the original codebase.  
In other words, it allows you to make your changes visible to everyone visiting the wiki.  


## Opening the Pull Request
When you head back to your fork's GitHub page, you will notice the branch info bar.  
This bar tells you how your fork version differs from the original one.  

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