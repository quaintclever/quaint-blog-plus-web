<template>
    <div>
        <article>
            <h1 class="t_nav">
                <span>变身技术宅，一起拯救美好的世界。</span>
                <a href="/" class="n1">网站首页</a><a class="n2">关于我</a>
            </h1>
            <div class="ab_box">
                <div class="leftbox">
                    <div class="newsview">
                        <div class="news_infos">
                            <p style="margin-top: 30px;">
                                此时，你看到这个网站的时候，会不会微微一笑，原来再次回来，网站还是这么的简陋不堪。<br /><br />
                                但是，此时的你驻足停留，我们已是朋友，前端的路上我再也不用一个人独自行走，感谢路过的所有人。<br /><br />
                                倘若，有一天你还会突然想起我，会来看看我的变化，那么我将努力让你可以留下足迹。<br/><br/>
                                那时候 ，我想拿起一杯酒，听听多年来，在外流浪的朋友，你的故事。<br /><br />
                                <br />
                            <h2 style="text-align: right;margin-bottom: 30px;">——致远去の大学生活</h2>

                            <p>服务器：阿里云服务器</p>
                            <br />
                            <p>技术栈：
                                <a href="https://spring.io/projects/spring-boot/" target="_blank">SpringBoot</a>、
                                <a href="https://vuejs.org/" target="_blank">Vue</a>
                            </p>
                        </div>
                        <div style="height: 150px;"></div>
                    </div>
                </div>
                <div class="rightbox">
                    <div class="aboutme">
                        <h2 class="hometitle">关于我</h2>
                        <div class="avatar"> <img src="../assets/blog/images/quaint-head.png"> </div>
                        <div class="ab_con">
                            <p>网名：Quaint</p>
                            <p>职业：ACG爱好者 </p>
                            <p>爱好：放松,听歌,睡觉...</p>
                            <p>邮箱：quaint-aini@qq.com</p>
                        </div>
                    </div>
                    <right-column-nav></right-column-nav>
                    <right-label-cloud></right-label-cloud>
                    <right-friendship-link></right-friendship-link>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
    import RightColumnNav from '../components/RightColumnNav';
    import RightLabelCloud from '../components/RightLabelCloud';
    import RightFriendshipLink from '../components/RightFriendshipLink';
    export default {
        name: "About",
        components: {
            RightColumnNav,
            RightLabelCloud,
            RightFriendshipLink
        },
        metaInfo: {
            title: 'Quaint个人博客 - 关于我',
            meta: [
                {
                    name: 'keywords',
                    content: 'quaint个人博客,quaintBlog,quaint'
                },
                {
                    name: 'description',
                    content: '(๑• ₃ •๑)欢迎来到Quaintの博客，(๑> ؂ <๑)这是一个正在成长中的博客，一起成长的还有我的好朋友(> ω <)夏睡醒了秋~'
                }
            ]
        }
    }
</script>

<style scoped>

</style>