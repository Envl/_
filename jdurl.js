export default function createWrapper(ghRepoPath,pathPrefix) {
    return function jdurl(localPath){
        return 'https://cdn.jsdelivr.net/gh/'+ghRepoPath+pathPrefix+localPath
    }
}