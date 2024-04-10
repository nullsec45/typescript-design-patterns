namespace Command{
    interface BlogPost{
        execute(params:any):any;
    }

    class BlogUtility{
        static titleToSlug(){}
        static dateToHumanize(){}
        static getMostViewedPosts(){}
        static getFeaturedPosts(){}
        static getMonetizePosts(){}
    }

    class SaveBlogPost implements BlogPost{
        execute() {
            BlogUtility.titleToSlug()
            this.save()
        }

        protected save(){

        }
    }

    class UpdateBlogPost implements BlogPost{
        execute() {
            BlogUtility.titleToSlug()
            this.update()
        }

        protected update(){

        }
    }

    class GetBlogPost implements BlogPost{
        execute(singlePost: boolean) {
            BlogUtility.dateToHumanize();

            if(singlePost){
                this.getPost();
            }else{
                this.getPosts();
            }
        }

        getPost(){};

        getPosts(){};
    }
}