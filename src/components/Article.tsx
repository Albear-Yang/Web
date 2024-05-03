import './Article.css'
function Article(props: {title: string, date: string, article: string}){
    return(
        <>
        <h1 className = "title">{props.title}</h1>
        <div className = "body">
            <h4 className = "date">{props.date}</h4>
            <p className = "mainBody">
                After recently finishing my Chess AI, I learned a lot about min-max algorithms and how certain game AI's are made. Min-max is especially popular in the game of tic-tac-toe where there are only 19683 possible games. In fact, with min-max we know that tic-tac-toe is a solved game, meaning there is a certain combination of moves you can make to make sure winning is certain. Does this hold true for ultimate tic tac toe? A variation of tic-tac-toe featuring a 81 square grid, with 9, 9x9 grids.
                <br /> 
                <br />
                This has far more possible games than original tic tac toe and requires more nuance. For my next project I will be coding an app with C#, where not only can you play ultimate tic-tac-toe with your friends but I'll be coding an ultimate tic-tac-toe AI for you to play against as well. I'm pretty excited but I know I'm going to be pretty busy with COOP applications and classes so I'm setting a deadline for before midterms.
                <br />
                <br />
                My plan? After some light research, min-max algo does not translate well to ultimate tic-tac-toe as it's difficult to come up with an accurate evaluation function. Unlike chess where you can use the position of your pieces and piece value to give an estimate on who's winning ultimate tic-tac-toe does not have that. I'm going to read up on monte-carlo tree-search algo and implement that for my AI.

                Stay tuned for more!

                <br />
                For the rules of ultimate-tic-tac-toe <a href = "https://en.wikipedia.org/wiki/Ultimate_tic-tac-toe"> here </a>
                <br />
                For more information on min-max <a href = "https://en.wikipedia.org/wiki/Minimax#:~:text=Minmax%20(sometimes%20Minimax%2C%20MM%20or,case%20(maximum%20loss)%20scenario."> here</a>
                <br />
                If you want to play my chess AI <a href  = "https://colab.research.google.com/drive/1iMDWmPL9VKTCtdHXdcr1SQuMYSso4HUG?usp=sharing"> here</a>

                <br /> 
                <br />
                Thank you for reading my blog!
                <br/>
                <br/>
                If you are my future employer...
                <br/>
                <br/>
                I am extemely hard working and dedicated to your company. Please hire me !
                <br/>
                <br/>
                
            </p>
            <p className = "signoff"> Sincerely, <br/> Albert Yang</p>
        </div>
        
        </>
    )
}

export default Article;