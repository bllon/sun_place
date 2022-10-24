<template>
    <div>
        <EditArticleMain></EditArticleMain>
    </div>
</template>

<script>
import EditArticleMain from "@/components/Article/EditArticleMain"
export default {
    components: { EditArticleMain },
    name: "EditArticle",
    data() {
        return {
            show_header:false
        };
    }
};
</script>