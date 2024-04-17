---
title: 关于Git
date: 2024-03-26 16:27:12
tags:
---

# 关于Git的使用方法

+ `git init` 为当前目录本地初始化，本地创建仓库
+ `git init \<repo-name\>` 在当前目录**下**初始化、创建仓库

+ `git clone \<https://xxxx.com.xxx.git\> `远程克隆仓库
<!--more-->
+ `git config --global init.defaultBranch main`全局更改默认branch(分支)为main
+ `git branch -m main` 更改branch(分支)为main
+ `git config --global --list` 可以查看当前git设置的`user.name`、`user.email`
+ `git config --global credential.helper store`
+ `git config user.name` 查看git用户名
+ `git config user.email` 查看git用户邮箱
+ `git config --global user.name <your_name>` 设置全局git用户名
+ `git config --global user.email <your_email>` 设置全局git用户邮箱


## 将文件添加到仓库

+ `git init`		创建仓库
+ `git status`  	 查看仓库状态
+ `git add `              添加到暂存区
+ `git commit`       提交

> + `echo "这是第一个文件" > file1.txt` 在当前仓库写入“这是第一个文件”到`file1.txt`文件，如果没有这个文件则先创建再写入
> + `cat file1.txt` 查看`file.txt`文件
> + `git status` 查看仓库状态会看到`file1.txt`这个文件是**红色**的，也就是未添加到暂存区，属于已修改，未提交暂存状态
> + `git add file1.txt` 将文件添加到暂存区
>   + `git status` 再次查看仓库状态会看到`file1.txt`会变成**绿色**，这说明`file1.txt`文件已将添加到暂存区。
>   + `use "git restore --staged <file>..." to unstage` 命令窗口会提示这个命令，意思是我们可以使用`git restore --staged <file>` 这样的命令来把添加到暂存区的文件再取消暂存。这样再次使用git status查看仓库状态，`file1.txt`文件又会变成**红色**。
>   + `git add *.txt` 可以把所有`txt`类型的文件都一次添加到暂存区
>   + `git add .` 可以把当前文件下的所有文件都添加到暂存区，`.`并表示当前目录
> + `git commit` 提交当前暂存区文件，这个命令只会提交暂存区的文件，而不会提交工作区中的其他文件。工作区中未被添加到暂存区的文件是不会提交的
>   + `git commit -m "更该说明"` 如果不使用`-m`命令，`git commit`命令会进入一个交互式界面，默认使用vim编辑提交信息
>
> + `git log` 查看提交记录
>   + `git log --oneline` 查看简洁的提交记录



## git reset

**用于回退版本，可以回退到之前的某一个提交的状态**

> `git reset`的三种模式：
>
> + 软的：`git reset --soft`
>   + 回退到某一个版本，并且**保留**工作区和暂存区的所有修改内容
>
> + 硬的：`git reset --hard`
>   + 回退到某一个版本，并且**丢弃**工作区和暂存区的所有修改内容
>
> + 混合的：`git reset --mixed`
>   + 回退到某一个版本，并且**只保留工作区**的修改内容，丢弃暂存区的修改内容。git默认`mixed`
> + `git reflog` 查看操作的历史记录



## git diff

1. 查看***工作区、暂存区、本地仓库***之间的差异

2. 查看***不同版本***之间的差异

3. 查看***不同分支***之间的差异

+ `git diff` 后什么也不加，默认是**工作区**和**暂存区**之间的差异内容
+ `git diff head` 比较**工作区**和**版本库**之间的差异
+ `git diff --cached` 比较**暂存区**和**版本库**之间的差异

+ `git diff <版本号> <版本号>`比较**两个特定版本**之间的差异

* 最常用的：`git diff head~ head`比较**当前版本**和**上一个版本**差异
  * `git diff head^ head` 作用同上
  * `git diff head~2 head` 作用：比较**当前版本**与**提交之前第2个版本**差异
  * `git diff head~3 head` 作用：比较**当前版本**与**提交之前第3个版本**差异
  * `git diff head~3 head <file_name>` 作用：比较**当前版本特定文件**与**提交之前第3个版本特定文件**之间的差异
* 查看两个分支之间的差异，直接加上两个分支名



## 从版本库中删除文件

+ windows直接删除
+ `git ls-files` 查看git仓库中已经被跟踪的文件，即commit之后的文件内容
+ `rm file;git add file` 先从工作区删除文件，然后再暂存删除内容

+ `git rm <file>` 把文件从工作区和暂存区同时删除
+ `git rm --cached <file>` 删除暂存区中的文件，但保留在当前工作区中

+ `git rm -r * `递归删除某个目录下的所有子目录和文件
+ 删除后不要忘记提交



## .gitignore文件

`ignore`——忽略

作用：忽略掉一些不应该被加入到版本库中的文件

> #### 应该忽略那些文件：
>
> > + 系统或者软件自动生成的文件
> > + 编译产生的中间文件和结果文件
> > + 运行时生成的日志文件、缓存文件、临时文件
> > + **涉及身份、密码、口令、密钥等敏感信息文件**
>
> 使用方法：
>
> > 例如本地仓库中有两个log文件：`access.log`、`other.log`
> >
> > 其中access.log存放我们的私密信息，我们不想提交。
> >
> > 使用：`echo access.log > .gitignore`将`access.log`添加到`.gitignore`文件中忽略，这样提交的就只是`other.log`与`.gitignore`文件，而`.gitignore`文件中也只有`access.log`的文件名，并不包含`access.log`的信息。相当于一个忽略清单。
> >
> > 想要忽略什么文件，什么类型的文件，只要编辑`.gitignore`文件就OK，比如忽略所有`.log`文件，只要在`.gitignore`文件中添加`*.log`，这样无论是之前存在的，之后新建的log文件都会被忽略
> >
> > + `.gitignore`文件生效有一个前提：文件不能是已经被添加到版本库中的文件
> > + `git status -s` 其中`-s`是`short`的缩写，是简略的查看状态
> > + 忽略文件夹：在`.gitignore`文件中添加`<file_name>/`，这样就将整个文件夹（目录）及文件夹下的内容都忽略了。
> >
> > **.gitignore文件的匹配规则：**
> >
> > 1. 从上到下逐行匹配，每一行表示一个忽略模式
> >
> >    + Git官网匹配规则：
> >
> >      [https://git-scm.com/docs/gitignore](https://git-scm.com/docs/gitignore)
> >
> >    + \# 用作注释
> >
> >    + ...(自个儿查去)



---

---



## 远程操作

+ `git clone <ssh链接>` 本地克隆远程仓库
+ `git pull` 拉取，本地仓库拉取远程仓库信息
+ `git push` 推送，本地仓库推送信息给远程仓库

> 1. 生成SSH Key：`ssh-keygen -t rsa -b 4096`
>    1. 私钥文件：`id_rsa`
>    2. 公钥文件：`id_rsa.pub`
> 2. 克隆仓库：`git clone <repo-address>`
> 3. 推送更新内容：`git push <remote><branch>`
> 4. 拉取更新内容：`git pull <remote>`



### 本地已有仓库，如何放入远程仓库？

+ `git remote add <shortname><url>` 

  + 通常默认的<shortname>为：`origin`

  + ```
    git remote add origin git@github.com:knightadam/first-repo.git
    ```

  + 也可以指定一个其他的别名

+ `git remote -v` 查看当前仓库所对应的远程仓库的别名和地址

+ `git branch -M main` 指定分支的名称为main

+ `git push -u origin main:main` 将本地main分支与远程的origin仓库的main分支关联，如果本地分支与远程分支的名称相同，则可以省略：`git push origin main`

+ `git push -f origin main` 强制将本地仓库文件提交远程仓库

+ `git pull <远程仓库名><远程分支名>:<本地分支名>` 此处仓库和分支的名称可以省略，如果省略，默认拉取远程仓库别名为origin的main分支，作用就是将远程仓库的指定分支拉取到本地再进行合并

+ `git fetch` 只会获取远程仓库的修改，但是并不会自动合并到本地仓库，而是需要手动合并

#### 总结：

> 1. 添加远程仓库：
>
>    + `git remote add <远程仓库别名><远程仓库地址>`
>
>      例：`git remote add origin git@github.com:knightadam/first-repo.git`
>
>    + `git push -u <远程仓库名><分支名>`
>
>      即：`git push -u origin main`
>
> 2. 查看远程仓库：`git remote -v`
>
> 3. 拉取远程仓库内容： 
>
>    + `git pull <远程仓库名><远程分支名>:<本地分支名>`
>
>    + `<远程分支名>:<本地分支名>` 相同可省略冒号后面的部分
>
>    + 即：`git pull origin main`



---



## Gitee的使用和GitLab本地化部署

+ gitee.com
  + 特色：国内平台
+ gitlab.com
  + 特色：私有化部署
