// import db from "../Database/index.js";
import * as dao from "./dao.js"; 

function ModuleRoutes(app) {
  // update
    // app.put("/api/modules/:mid", (req, res) => {
    //     const { mid } = req.params;
    //     const moduleIndex = db.modules.findIndex(
    //       (m) => m._id === mid);
    //     db.modules[moduleIndex] = {
    //       ...db.modules[moduleIndex],
    //       ...req.body
    //     };
    //     res.sendStatus(204);
    //   });


    const updateModule = async (req, res) => {
      const { mid } = req.params;
      const status = await dao.updateModule(mid, req.body);
      res.json(status);
  };
  app.put("/api/modules/:mid", updateModule);

    // app.delete("/api/modules/:mid", (req, res) => {
    //     const { mid } = req.params;
    //     db.modules = db.modules.filter((m) => m._id !== mid);
    //     res.sendStatus(200);
    //   });
    const deleteModule = async (req, res) => {
      console.log("delete")
      console.log(req.params.mid)
      const status = await dao.deleteModule(req.params.mid);
      res.json(status);
  };
  app.delete("/api/modules/:mid", deleteModule);

      // new
  //   app.post("/api/courses/:cid/modules", (req, res) => {
  //   const { cid } = req.params;
  //   const newModule = {
  //     ...req.body,
  //     course: cid,
  //     _id: new Date().getTime().toString(),
  //   };
  //   db.modules.push(newModule);
  //   res.send(newModule);
  // });

  const createModule = async (req, res) => {
    console.log("create")
    console.log(req.params)
    const { cid } = req.params;
    const module = await dao.createModule(cid, req.body);
    res.json(module);
};
app.post("/api/courses/:cid/modules", createModule);

// get modules by id
  // app.get("/api/courses/:cid/modules", (req, res) => {
  //   const { cid } = req.params;
  //   const modules = db.modules
  //     .filter((m) => m.course === cid);
  //   res.send(modules);
  // });

  const findModulesForCourse = async (req, res) => {
    const module = await dao.findModulesForCourse(req.params.cid);
    if (!module) {
      res.status(404).send("Module not found");
      return;
    }
    res.json(module);
  };
  app.get("/api/courses/:cid/modules", findModulesForCourse);
}
export default ModuleRoutes;