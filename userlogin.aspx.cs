using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Web;
using System.Web.Optimization;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace OnlineBookstore
{
    public partial class userlogin : System.Web.UI.Page
    {
        string strcon = ConfigurationManager.ConnectionStrings["con"].ConnectionString;
        protected void Page_Load(object sender, EventArgs e)
        {

        }


        protected void Button1_Click(object sender, EventArgs e)
        {
            try
            {
                SqlConnection con = new SqlConnection(strcon);
                if (con.State == System.Data.ConnectionState.Closed)
                {
                    con.Open();
                }
                SqlCommand cmd = new SqlCommand("SELECT * FROM information WHERE member_id = '" + TextBox1.Text.Trim() + "';", con);
                SqlDataReader reader = cmd.ExecuteReader();
                reader.Read();
                String name = reader.GetValue(1).ToString();
                reader.Close();

                SqlCommand query = new SqlCommand("SELECT * FROM member WHERE member_id = '" + TextBox1.Text.Trim() + "' AND password='" + TextBox2.Text.Trim() + "';", con);
                SqlDataReader dr = query.ExecuteReader();
                if (dr.HasRows)
                {
                    Response.Write("<script>alert('welcome back, ' + '" + name + "');</script>");
                    Session["member_id"] = TextBox1.Text.Trim();
                    Session["full_name"] = name;
                    Session["role"] = "user";
                    Response.Redirect("homepage.aspx");
                }
                else
                {
                    Response.Write("<script>alert('Invalid Account');</script>");
                }

            }

            catch (Exception ex)
            {

            }
        }
    }
}
