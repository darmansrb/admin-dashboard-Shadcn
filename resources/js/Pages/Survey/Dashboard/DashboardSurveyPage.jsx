import React, { useState } from "react";
import { AdminLayout } from "@/layouts/AdminLayout";
import { StatCard } from "@/components/ui/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardSurveyPage = () => {
  return (
    <AdminLayout>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Total Revenue" value="$45,231.89" change="+20.1% from last month" />
        <StatCard title="Subscriptions" value="+2350" change="+180.1% from last month" />
        <StatCard title="Sales" value="+12,234" change="+19% from last month" />
        <StatCard title="Active Now" value="+573" change="+201 since last hour" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-60 bg-gray-200 dark:bg-gray-800 rounded-md flex items-center justify-center">
              Chart Placeholder
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <p className="text-sm text-muted-foreground">You made 265 sales this month.</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "$1,999.00" },
              { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "$39.00" },
              { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "$299.00" },
              { name: "William Kim", email: "will@email.com", amount: "$99.00" },
              { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "$39.00" },
            ].map((user, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-xs text-muted-foreground">{user.email}</div>
                </div>
                <div className="font-semibold">{user.amount}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}

export default DashboardSurveyPage