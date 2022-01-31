export default class Static {
   constructor() {
      // Don't allow instantiation of class
      throw new Error(`Static classes cannot be instantiated (class ${new.target.name})`)
   } 
}