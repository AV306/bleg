function prepareLinks()
{
    // Who needs React? I've got all I need for dynamic content right here!
    // Fill in the href of gallery-element <a>s according to their <h2>'s content
    for ( let link of document.querySelectorAll( "div.gallery-element > a" ) )
        link.href = `${document.location.href.replace( 'index.html', '' )}/${link.firstChild.innerText.toLowerCase().replace( ' ', '-' )}`;

    for ( let link of document.querySelectorAll( "nav > a" ) )
    {
        switch ( link.innerText )
        {
            case "Main page":
            {
                link.href = document.location.origin;
            } break;
            
            case "Blog index":
            {
                //link.href = document.location.href;
            } break;
        }
    }
}