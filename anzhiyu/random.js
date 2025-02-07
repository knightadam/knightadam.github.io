var posts=["2024/05/04/Blender-快捷键/","2024/05/28/Docker使用教程/","2024/05/16/GitHub工作流/","2024/05/07/hexo博客/","2024/03/26/MarkDown语法/","2024/05/09/npm错误/","2024/05/10/vim 教程/","2024/03/26/关于Git/","2024/03/23/关于这个Blog/","2024/12/28/动漫追番（个人）/","2024/04/28/如何在VSCode中配置C#环境，并配置coderunner一键运行/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };