﻿using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace OnlineBookstore
{
    public partial class adminlogin : System.Web.UI.Page
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
                SqlCommand query = new SqlCommand("SELECT * FROM admin WHERE admin_id='" + TextBox1.Text.Trim() + "' AND password='" + TextBox2.Text.Trim() + "'", con);
                SqlDataReader dr = query.ExecuteReader();
                if (dr.HasRows)
                {
                    while (dr.Read())
                    {
                        Response.Write("<script>alert('welcome back, ' + '" + dr.GetValue(2).ToString() + "');</script>");
                        Session["full_name"] = dr.GetValue(2).ToString();
                        Session["admin_id"] = dr.GetValue(0).ToString();
                        Session["role"] = "admin";
                    }

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