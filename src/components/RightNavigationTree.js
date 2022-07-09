import '../css/right-navigation-tree.css';

function RightNavigationTree(props) {
  const topicURL = '/topics/'

  const parentTopic = (props.parentTopic[0] === 0) ?
                        (<li className='null'>Parent Topic</li>) :
                        (<li><b>Parent Topic:</b><br />
                          <a href={topicURL+props.parentTopic[0]}>{props.parentTopic[1]}</a>
                        </li>);

  const prevTopic = (props.prevTopic[0] === 0) ?
                      (<li className='null'>Previous Topic</li>) :
                      (<li><b>Previous Topic:</b><br />
                        <a href={topicURL+props.prevTopic[0]}>{props.prevTopic[1]}</a>
                      </li>);

  const nextTopic = (props.nextTopic[0] === 0) ?
                      (<li className='null'>Next Topic</li>) :
                      (<li><b>Next Topic:</b><br />
                        <a href={topicURL+props.nextTopic[0]}>{props.nextTopic[1]}</a>
                      </li>);

  const subTopics = (props.subTopics.length === 0) ?
                      (<li className="null">Subtopics</li>) :
                      (<li><b>Subtopics:</b>
                        <ul>
                          {props.subTopics.map((e) => (
                            <li key={e.id}><a href={topicURL+e.id}>{e.attributes.title}</a></li>
                          ))}
                        </ul>
                      </li>)

  return (
    <div className="right-navigation-tree">
      <ul>
        {parentTopic}
        {prevTopic}
        {nextTopic}
        {subTopics}
      </ul>
    </div>
  );
}

export default RightNavigationTree;
