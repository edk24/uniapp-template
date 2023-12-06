<script setup>
import { onLaunch } from '@dcloudio/uni-app';
import { useUserStore } from './stores/user';
import { login } from './api/auth';

const userStore = useUserStore()

onLaunch((opt) => {

    // 检查是否已登录 并 获取用户信息
    if (userStore.isLogin) {
        // userStore.getUser()
        // TODO 未登录会在拦截器中处理跳转登录页， 请在 xxx 配置登录页路径
    }

});
</script>
