export default (methodName, snapshot) => {
  switch (methodName) {
    case 'constructor':
      console.log("1. Constructor - МОНТЕРОВАНИЕ");
      console.log("==============================");
      break;
    case 'componentDidMount':
      console.log("3. Component did mount - МОНТЕРОВАНИЕ");
      console.log("==============================\n\n\n\n");
      break;
    case 'componentDidMount-r':
      console.log("4. Component did mount - МОНТЕРОВАНИЕ");
      console.log("==============================\n\n\n\n");
      break;
    case 'shouldComponentUpdate':
      console.log("6. Should component update - ОБНОВЛЕНИЕ");
      console.log("==============================\n\n\n\n");
      break;
    case 'getSnapshotBeforeUpdate':
      console.log("8. Get snap shot before update - ОБНОВЛЕНИЕ");
      console.log("==============================");
      break;
    case 'componentDidUpdate':
      console.log("4. Component did update - ОБНОВЛЕНИЕ");
      console.log("==============================\n\n\n\n");
      break;
    case 'componentDidUpdate-r':
      console.log("9. Component did update - ОБНОВЛЕНИЕ");
      console.log("snapshot: ", snapshot);
      console.log("==============================");
      break;
    case 'componentWillUnmount':
      console.log("5. Component will unmount - РАЗМОНТЕРОВАНИЕ");
      console.log("==============================\n\n\n\n");
      break;
    case 'componentWillUnmount-r':
      console.log("8. Component will unmount - РАЗМОНТЕРОВАНИЕ");
      console.log("==============================\n\n\n\n");
      break;
    case 'getDerivedStateFromProps':
      console.log("2/5. Get derived state from props - МОНТЕРОВАНИЕ/ОБНОВЛЕНИЕ");
      console.log("==============================");
      break;
    case 'handleClick':
      console.log("[this.setState] Updating state..........");
      console.log("==============================");
      break;
    case 'render':
      console.log("2. Render - МОНТЕРОВАНИЕ/ОБНОВЛЕНИЕ");
      console.log("==============================");
      break;
    case 'render-r':
      console.log("3/7. Render - МОНТЕРОВАНИЕ/ОБНОВЛЕНИЕ");
      console.log("==============================");
      break;
    default:
      console.log("==============================");
  }
}