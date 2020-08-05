using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using RooyaDev.Models;
using System.IO;

namespace RooyaDev.Controllers
{
    [Authorize]
    public class BannersController : Controller
    {
        private DB db = new DB();

        // GET: Banners
        public ActionResult Index()
        {
            return View(db.Banners.ToList());
        }

        // GET: Banners/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return RedirectToAction("Index");
            }
            Banner banner = db.Banners.Find(id);
            if (banner == null)
            {
                return HttpNotFound();
            }
            return View(banner);
        }
        // POST: Banners/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,FirstHead,SecondHead,FirstHead_AR,SecondHead_AR,Link")] Banner banner,HttpPostedFileBase Photo)
        {
            if (ModelState.IsValid&Photo!=null)
            {
                db.Banners.Add(banner);
                db.SaveChanges();
                Photo.SaveAs(Server.MapPath("~/Uploads/Banner/" + banner.ID + ".jpg"));
                return RedirectToAction("Index");
            }

            return View(banner);
        }

        // GET: Banners/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return RedirectToAction("Index");
            }
            Banner banner = db.Banners.Find(id);
            if (banner == null)
            {
                return HttpNotFound();
            }
            return View(banner);
        }

        // POST: Banners/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,FirstHead,SecondHead,FirstHead_AR,SecondHead_AR,Link")] Banner banner,HttpPostedFileBase Photo)
        {
            if (ModelState.IsValid)
            {
                db.Entry(banner).State = EntityState.Modified;
                db.SaveChanges();
                if(Photo!=null)
                {
                    Photo.SaveAs(Server.MapPath("~/Uploads/Banner/" + banner.ID + ".jpg"));
                }
                return RedirectToAction("Index");
            }
            return View(banner);
        }

        // POST: Banners/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Banner banner = db.Banners.Find(id);
            db.Banners.Remove(banner);
            db.SaveChanges();
            FileInfo F = new FileInfo(Server.MapPath("~/Uploads/Banner/" + id + ".jpg"));
            if(F.Exists)
            {
                F.Delete();
            }
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
