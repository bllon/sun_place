<template>
    <div>
        <EditArticleMain></EditArticleMain>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import EditArticleMain from "@/components/Article/EditArticleMain"
export default {
    components: { Header, EditArticleMain },
    name: "EditArticle",
    data() {
        return {
            show_header:false
        };
    }
};
</script>