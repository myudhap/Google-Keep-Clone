import React, { useState, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

const Main = (props) => {

    return (
        <div className="container">
            {
                props.showInput ? (
                    <div className="tricky" onClick={() => { props.onShowInput(false); }}></div>
                ) : ''
            }
            <form className="box-area">
                {
                    props.showInput ? (
                        <input className="input-title" placeholder="Title"
                            onChange={(e)=>props.onTitleChange(e.target.value)}
                        />
                    ) : ''
                }
                <TextareaAutosize className="input-text" placeholder="Take a note..."
                    onFocus={()=> {
                        props.onShowInput(true);
                    }}
                />
            </form>
        </div>
    )
}

export default Main;