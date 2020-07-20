class Api::V1::PostsController < ApplicationController
    def index
        posts = Post.all
        render json: posts
    end

    def create
        # byebug
        post = Post.create(post_params)
        render json: post
    end

    private

    def post_params
        params.require(:post).permit(:name, :message, :img, :audio)
    end


end
