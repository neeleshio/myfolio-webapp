import Embed from "@editorjs/embed";
import List from "@editorjs/list";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";
// import Raw from "@editorjs/raw";
// import Marker from "@editorjs/marker";
// import CheckList from "@editorjs/checklist";
// import Warning from "@editorjs/warning";
// import Delimiter from "@editorjs/delimiter";
// import Table from "@editorjs/table";

export const EDITOR_JS_TOOLS = {
    embed: Embed,
    list: List,
    code: Code,
    image: Image,
    header: {
        class: Header,
        // inlineToolbar: ["link"],
        config: {
            placeholder: "Title"
        }
    },
    quote: Quote,
    inlineCode: InlineCode,
    simpleImage: SimpleImage,
    linkTool: LinkTool,
    // checklist: CheckList,
    // delimiter: Delimiter,
    // table: Table,
    // marker: Marker,
    // warning: Warning,
    // raw: Raw,
};