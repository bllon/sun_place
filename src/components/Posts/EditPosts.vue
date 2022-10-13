<template>
    <div>
        <Header></Header>
        <EditPostsMain></EditPostsMain>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import EditPostsMain from "@/components/Posts/EditPostsMain"
export default {
    components: { Header, EditPostsMain },
    name: "EditPosts",
    data() {
        return {
        };
    }
};
</script>