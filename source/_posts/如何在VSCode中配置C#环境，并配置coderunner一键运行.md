# 在VSCode中配置C#环境，并配置coderunner一键运行

## 1. 下载并安装 dotnet-sdk

+ 下载地址：`https://dotnet.microsoft.com/learn/dotnet/hello-world-tutorial/install`

+ 安装：

  + 直接点击下载完成的`.exe`文件，直接安装

+ 测试是否安装成功：

  + `win + r`打开`cmd` 

  + 输入`dotnet -h`

  + 显示如下：

    + ```bash
      使用情况: dotnet [runtime-options] [path-to-application] [arguments]
      
      执行 .NET 应用程序。
      
      runtime-options:
        --additionalprobingpath <path>   要探测的包含探测策略和程序集的路径。
        --additional-deps <path>         指向其他 deps.json 文件的路径。
        --depsfile                       指向 <application>.deps.json 文件的路径。
        --fx-version <version>           要用于运行应用程序的安装版共享框架的版本。
        --roll-forward <setting>         前滚至框架版本(LatestPatch, Minor, LatestMinor, Major, LatestMajor, Disable)。
        --runtimeconfig                  指向 <application>.runtimeconfig.json 文件的路径。
      
      path-to-application:
        要执行的应用程序 .dll 文件的路径。
      
      使用情况: dotnet [sdk-options] [command] [command-options] [arguments]
      
      执行 .NET SDK 命令。
      
      sdk-options:
        -d|--diagnostics  启用诊断输出。
        -h|--help         显示命令行帮助。
        --info            显示 .NET 信息。
        --list-runtimes   显示安装的运行时。
        --list-sdks       显示安装的 SDK。
        --version         显示使用中的 .NET SDK 版本。
      
      SDK 命令:
        add               将包或引用添加到 .NET 项目。
        build             生成 .NET 项目。
        build-server      与由生成版本启动的服务器进行交互。
        clean             清理 .NET 项目的生成输出。
        format            将样式首选项应用到项目或解决方案。
        help              显示命令行帮助。
        list              列出 .NET 项目的项目引用。
        msbuild           运行 Microsoft 生成引擎(MSBuild)命令。
        new               创建新的 .NET 项目或文件。
        nuget             提供其他 NuGet 命令。
        pack              创建 NuGet 包。
        publish           发布 .NET 项目进行部署。
        remove            从 .NET 项目中删除包或引用。
        restore           还原 .NET 项目中指定的依赖项。
        run               生成并运行 .NET 项目输出。
        sdk               管理 .NET SDK 安装。
        sln               修改 Visual Studio 解决方案文件。
        store             在运行时包存储中存储指定的程序集。
        test              使用 .NET 项目中指定的测试运行程序运行单元测试。
        tool              安装或管理扩展 .NET 体验的工具。
        vstest            运行 Microsoft 测试引擎(VSTest)命令。
        workload          管理可选工作负荷。
      
      捆绑工具中的其他命令:
        dev-certs         创建和管理开发证书。
        fsi               启动 F# 交互/执行 F# 脚本。
        user-jwts         在开发中管理 JSON Web 令牌。
        user-secrets      管理开发用户密码。
        watch             启动文件观察程序，它会在文件发生更改时运行命令。
      
      运行 "dotnet [command] --help"，获取有关命令的详细信息。
      ```

+ 安装成功

## 2. VSCode 安装 C# 插件

+ 打开 VS Code，并在左侧 VS Code 的活动栏中选择“扩展”按钮。在搜索栏中键入 "C#"，选择“C# 开发工具包”，然后在 C# 开发工具包扩展页上选择“安装”按钮。

![安装“C# DEV Kit”扩展](https://dotnet.microsoft.com/static/images/dotnet-hello-world/vscode-csharp-devkit.png)

+ 打开终端：

![打开vscode中的终端](https://dotnet.microsoft.com/static/images/dotnet-hello-world/vscode-new-terminal.png)

+ 在终端中，运行如下命令检查安装：

  + `dotnet`

  + 返回如下则安装成功：

  + ```bash
    Usage: dotnet [options]
    Usage: dotnet [path-to-application]
    
    Options:
      -h|--help         Display help.
      --info            Display .NET information.
      --list-sdks       Display the installed SDKs.
      --list-runtimes   Display the installed runtimes.
    
    path-to-application:
      The path to an application .dll file to execute.
    ```

## 3. 创建项目

+ 按 `CTRL`+`SHIFT`+`P`，在 VS Code 中打开命令面板。

+ 键入 "`.NET: `" 来查看可使用 C# 开发工具包运行的命令!

+ 查找“.NET: 新建项目”，并将其选中来创建新的 .NET 项目。

+ 向下滚动并选择“控制台应用”。

+ 选择要保存项目的文件夹位置。

+ 出现提示时，在命令面板中将项目命名为 MyConsoleApp。

+ 如果你有 Visual Studio 订阅，请登录你的帐户。如果没有看到弹出提示，请单击窗口右下角 VS Code 状态栏中的 C# 图标。

  + <img src="https://dotnet.microsoft.com/static/images/dotnet-hello-world/vs-sub-sign-in.png" style="zoom: 50%;" />

+ 在 VS Code 的边栏中，确保已打开资源管理器。应该会在此处看到文件夹和解决方案资源管理器。如果已打开一个新的 VS Code 实例，解决方案资源管理器可能在边栏底部附近。

  <img src="https://dotnet.microsoft.com/static/images/dotnet-hello-world/vscode-solution-explorer.png" style="zoom:50%;" />

+ `MyConsoleApp` 文件夹中的主文件称为 `Program.cs`。默认情况下，它已包含将 `Hello, World!` 写入终端所需的代码。单击文件可查看模板创建的代码:

  <img src="https://dotnet.microsoft.com/static/images/dotnet-hello-world/programcs-solution-explorer.png" style="zoom:50%;" />

## 4. 通过插件 Code Runner 一键运行 C# 程序

1. 一般通过“运行于此文件关联的项目”按钮运行 C# 程序

   ![](https://blogimg.knightzmy.cloudns.ch/img/VSCode_runcsharp.jpg)

2. VSCode 安装 `Code Runner` 扩展
   + 通过包管理程序`scoop`或`Chocolatey `安装`scriptcs`程序
   + 打开要运行的 C# 文件
   + 快捷键 `Ctrl` + `Alt` + `N` 运行

## ⭐⭐⭐⭐⭐⭐⭐⭐！！！OVER ！！！⭐⭐⭐⭐⭐⭐⭐⭐