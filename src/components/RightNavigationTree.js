import '../css/right-navigation-tree.css';

function RightNavigationTree(props) {

  return (
    <div className="right-navigation-tree">
      <ul>
        <li>Parent Topic</li>
        <li>Previous Topic</li>
        <li>Next Topic</li>
        <li>Subtopics:
          <ul>
            <li>Definitions and Metamodel</li>
            <li>Useful Concepts and Ideas</li>
            <li>Career Path and Education</li>
            <li>Running an EA Practice</li>
            <li>Business Architecture</li>
            <li>Information Architecture</li>
            <li>Enterprise Solution Architecture</li>
            <li>Technology Security and Network Architecture</li>
            <li>Digital Transformation</li>
            <li>Techniques to achieve results</li>
            <li>Case Studies in EA</li>
            <li>Research Requests and Results</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default RightNavigationTree;
