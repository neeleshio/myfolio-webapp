import React, { useRef } from 'react'
import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./tools";
import Publish from './Publish';
import './EditorStyles.scss'
import Modal from '../../../../components/Modal'

function Editor() {
    const instanceRef: React.MutableRefObject<any> = useRef(null)

    // const handleSave = async () => {
    //     const savedData = await instanceRef.current.save()
    //     console.log(savedData)
    // }

    return (
        <>
            <div id="editor">
                <EditorJs
                    instanceRef={(instance) => (instanceRef.current = instance)}
                    tools={EDITOR_JS_TOOLS}
                    data={{
                        time: 1556098174501,
                        blocks: [
                            {
                                type: "image",
                                data: {
                                    "file": {
                                    }
                                }
                            },
                            {
                                type: "header",
                                data: {
                                    level: 1,
                                }
                            },
                        ]
                    }}
                />
            </div>

            <Publish />
        </>
    )
}

export default Editor
