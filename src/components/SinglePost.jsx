import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { request } from "../utils/axios-util";

const getById = (postId) => {
  return request({ url: `/posts/${postId}` });
};
export default function SinglePost (postId){

const { isLoading, data } = useQuery("projectNames", getById);
    if (isLoading) {
      return <h2>Loading...</h2>;
    }

return (
    <>
      {data?.data.map((posts) => (
        <div key={posts._id}>
          <div className="relative block p-4 border overflow-hidden border-gray-200 shadow-sm rounded-lg focus:outline-none focus:ring hover:border-gray-300 hover:ring-1 hover:ring-gray-200 bg-white">
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
            <div className="grid-cols-3">
              <div className="my-5">
                <h6 className="mt-2 mb-3 font-bold">{posts.title}</h6>

                <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                  {posts.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
