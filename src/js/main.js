
function ReadMore(){
	document.getElementById("read-more-section").style.visibility="visible";
	document.getElementById("read-more-btn").remove()
}

function GetTitle(){
	const text = document.getElementById("title-var").textContent;
	const rep_text = text.replaceAll('||', '"');
	console.log(JSON.parse(rep_text));
	return text;
}

function MainApp() {
	return (
		<div className="container">
	      <header>
	        <h1>I Can Haz Cheeseburger?</h1>
	        <h2>{GetTitle()}</h2>
	      </header>
	      <div className="layout">
	        <div className="col main">
	          <p>A lolcat is an image macro of one or more cats. The image's text is often idiosyncratic and grammatically incorrect, and is known as lolspeak.</p>

	          <p>Lolcat is a composite of two words, "lol" and "cat". "Lol" stands for "Laugh out Loud" or "Laughing out Loud"; hence, lolcats are intended to be funny and to include jokes. Lolcats images comprise a photo of a cat with a large caption characteristically set in a heavy sans serif font such as Impact or Arial Black. The image is, on occasion, digitally edited for effect.</p>

	          <p>The caption generally acts as a speech balloon encompassing a comment from the cat, or as a description of the depicted scene. The caption is intentionally written with deviations from standard English spelling and grammar, featuring "strangely-conjugated verbs, but a tendency to converge to a new set of rules in spelling and grammar". The text parodies the grammar-poor patois stereotypically attributed to Internet slang. Frequently, lolcat captions take the form of phrasal templates. Some phrases have a known source, usually a well-known Internet meme, such as All your base are belong to us or Do not want, while others don't. The language of lolcats has also been likened to baby talk, however it draws on a variety of linguistic resources, not just the imitation of baby talk.</p>

	          <p><a id="read-more-btn" href="#" onClick={ReadMore}>Read more...</a></p>
	          <div id='read-more-section' style={{visibility: "collapse"}}>
	            <p>Common themes include jokes of the form "Im in ur [noun], [verb]-ing ur [related noun]." Many lolcat images capture cats performing characteristically human actions or appearing to use modern technology, such as computers.</p>

	            <p>There are several well-known lolcat images and single-word captions that have spawned many variations and imitations, including "Ceiling Cat". Others include Fail (a cat with a slice of processed cheese on its face) and "I Can Has Cheezburger" (a portrait of a blue British Shorthair). Another popular format is "[Adjective] cat is [adjective/noun]."</p>
	          </div>

	          <p>Source: <a href="https://en.wikipedia.org/wiki/Lolcat">Wikipedia</a></p>
	        </div>
	        <div className="col sidebar">
	          <p><strong>Navigation</strong></p>
	          <ul>
	            <li>Home</li>
	            <li><a href="./photos.html">Photo Gallery</a></li>
	            <li><a href="http://icanhas.cheezburger.com">icanhas.cheezburger.com</a></li>
	          </ul>
	        </div>
	      </div>
	      <footer>
	        &copy; 2020 Ceiling Cat
	      </footer>
	    </div>

	);
}

ReactDOM.render(<MainApp/>, document.getElementById("root"));

