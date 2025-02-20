import React, { useState } from "react";
import { Editor } from '@tinymce/tinymce-react'

function PublishArticle() {

    const handleEditorChange = (content) => {
        console.log('Content:', content);
    };

    return (
        <Editor
            apiKey="9uo1k6kn86x3ip0tbf88x31kru6dtg02ef3kbgzwxt72yq2i"
            init={{
                height: 500,
                menubar: false,
                plugins: 'lists link image code',
                toolbar:
                    'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | code',
            }}
            onEditorChange={handleEditorChange}
        />
    );
}

export default PublishArticle;