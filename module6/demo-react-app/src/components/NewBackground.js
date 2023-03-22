function NewBackground (props){
    return (
        <div className={'newBackground componentBox' + props.color}>
            {props.children} {/* everything in between the opening <newBackground> and closing </newBackground> tags on lines 15-19 */}
        </div>
    );

}

export default NewBackground