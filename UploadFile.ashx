public class UploadFile : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "application/json";
            var paras = context.Request.Params["data"];
            JObject jobj = JObject.Parse(paras);
            string strUserName = jobj["username"].ToString();
            HttpFileCollection files = context.Request.Files;
            if (files.Count > 0)
            {
                var file = files[0];
                string fileExt = Path.GetExtension(file.FileName);
                string fileNewName = Guid.NewGuid() + fileExt;
                string strRelativeDir = "/Upload/" + strUserName;
                string strDir = context.Request.MapPath(strRelativeDir);
                if (!Directory.Exists(strDir))
                {
                    Directory.CreateDirectory(strDir);
                }
                string strSavePath = Path.Combine(strDir, fileNewName);
                file.SaveAs(strSavePath);
                context.Response.Write(Path.Combine(strRelativeDir, fileNewName));
            }
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }